package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/21/17.
 */
public class ButeringSellingPrice implements SellingPrice {
    private final Object value;

    public ButeringSellingPrice(Object value) {
        this.value = value;
    }

    public Object minus(Cost cost) {
        return this.value;
    }

    public boolean equals(Object another) {
        if (!another.getClass().equals(this.getClass())) {
            return false;
        }

        return true;
    }
}
