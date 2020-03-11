<?php

namespace App\Util;

use Illuminate\Support\Facades\Storage;

/**
 * Class to handle the image decoding
 * @author Gustavo Delgado <gustavo@onecore.cl>
 */
final class ImageBase64Decoder implements ImageDecoderInterface
{
    /**
     * {@inheritDoc}
     */
    public static function decode(string $encodedImage, string $uploadPath = null) : array
    {
        $uploadPath = $uploadPath === null ? config('app.storage_uploads') : $uploadPath;

        $id = uniqid();

        list($type, $encodedImage) = explode(';', $encodedImage);
        list(, $extension) = explode('/',$type);
        list(, $encodedImage) = explode(',', $encodedImage);

        $fileName = $id . '.' . $extension;
        $encodedImage = base64_decode($encodedImage);

        $path = $uploadPath . $fileName;

        Storage::put($path, $encodedImage);

        return [
            'id' => $id,
            'type' => $extension,
            'path' => $path,
        ];
    }
}
