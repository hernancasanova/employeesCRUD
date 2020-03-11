<?php
namespace App\Http\Transformers;

class TransactionTransformer extends AbstractTransformer
{
    /**
     * Constructs the transformer
     *
     * @param AssetTransformer $assetTransformer
     */
    public function __construct(AssetTransformer $assetTransformer)
    {
        $this->assetTransformer = $assetTransformer;
    }

    /**
     * {@inheritDoc
     */
    public function transform($transaction)
    {
        $assets = $transaction->assets;
        $transaction = $transaction->toArray();
        $transaction['assets'] = $this->assetTransformer->transformCollection($assets->all());

        return $transaction;
    }
}