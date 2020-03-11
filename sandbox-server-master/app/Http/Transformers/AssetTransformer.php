<?php

namespace App\Http\Transformers;

use Illuminate\Support\Facades\Storage;

class AssetTransformer extends AbstractTransformer
{
    /**
     * @var string Upload path name
     */
    protected $upload;

    /**
     * Constructs the tranformer
     */
    public function __construct()
    {
        $this->upload = str_replace('public/', '', config('app.storage_uploads'));
    }

    /**
     * {@inheritDoc
     */
    public function transform($asset)
    {
        $assetArray = $asset->toArray();
        $asset->metadata = json_decode($asset->metadata);

        if (isset($asset->metadata->key))
        {
            $assetArray['url'] = Storage::disk('s3')->temporaryUrl($asset->metadata->key, (new \DateTimeImmutable('now UTC'))->modify('+60 minute'));
        }
        else
        {
            $assetArray['url'] = asset('storage/' . $this->upload . $asset->sha1 . '.' . $asset->type);
        }

        return $assetArray;
    }
}