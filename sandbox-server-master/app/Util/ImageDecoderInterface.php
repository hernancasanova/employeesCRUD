<?php

namespace App\Util;

/**
 * Contract for image decoding
 * @author Gustavo Delgado <gustavo@onecore.cl>
 */
interface ImageDecoderInterface
{
    /**
     * Decode the given base64 image
     *
     * @param string $encodedImage
     * @param string $uploadPath
     * @return array List of image info [id, type, path]
     */
    public static function decode(string $encodedImage, string $uploadPath = 'uploads/') : array;
}
