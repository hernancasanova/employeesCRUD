<?php

namespace App\Http\Transformers;

abstract class AbstractTransformer
{
    /**
     * Transforms a collection
     *
     * @param array $items
     * @return void
     */
    public function transformCollection(array $items)
    {
        return array_map([$this, 'transform'], $items);
    }

    /**
     * Transform an item
     *
     * @param mixed $item
     * @return void
     */
    public abstract function transform($item);
}