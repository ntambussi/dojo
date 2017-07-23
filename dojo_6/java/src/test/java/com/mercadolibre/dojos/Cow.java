package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/21/17.
 */
public class Cow {
    public boolean equals(Object another ) {
        if (!another.getClass().equals(this.getClass())) {
            return false;
        }
        return true;
    }
}
