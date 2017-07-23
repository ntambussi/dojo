package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/21/17.
 */
public class Profit {

    private final Object value;

    public Profit(Object value) {
        this.value = value;    
    }

    public boolean equals(Object another) {
        if (!another.getClass().equals(this.getClass())) {
            return false;
        }

        Profit anotherProfit = (Profit) another;

        return this.value.equals(anotherProfit.value);
    }
}
