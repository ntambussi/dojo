package com.mercadolibre.dojos;

/**
 * Created by dsanchez on 7/21/17.
 */
public class ObjectSellingPrice  implements SellingPrice {
    private Object object;

    public ObjectSellingPrice(Vaca vaca) {
        this.object = vaca;
    }

    @Override
    public Object minus(Cost cost) {
        return this.object;
    }
}
