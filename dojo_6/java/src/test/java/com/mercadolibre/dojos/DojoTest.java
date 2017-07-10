package com.mercadolibre.dojos;

import com.sun.org.apache.xpath.internal.operations.Mult;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import javax.swing.plaf.multi.MultiInternalFrameUI;

import static org.junit.Assert.assertEquals;

/**
 * Tests for the dojo.
 */
public class DojoTest {
	
	@Before
	public void setup() {
	}
	
	@Test
	public void test_selling_a_product_has_a_profit_equal_to_selling_price_minus_cost_1() {
		SingleProduct p = new SingleProduct( new Cost(100.0));
		UnitSale sale = new UnitSale(p, new SellingPrice(300.0));

		assertEquals(200.0, sale.profit(), .002);
	}

    @Test
    public void test_selling_a_product_has_a_profit_equal_to_selling_price_minus_cost_2() {
        SingleProduct p = new SingleProduct( new Cost(50.0));
        UnitSale sale = new UnitSale(p, new SellingPrice(300.0));

        assertEquals(250.0, sale.profit(), .002);
    }

    @Test
    public void test_selling_many_products_has_a_profit_equal_to_selling_price_minus_accumulated_cost() {
        SingleProduct products[] = {
                new SingleProduct(new Cost(100)),
                new SingleProduct(new Cost(120))
        };
        MultiProductSale multiSale = new MultiProductSale(products, new SellingPrice(300));

        assertEquals(80, multiSale.profit(), .002);
    }

    @Test
    public void test_selling_single_product_bought_through_pack() {
        ProductPack productPack = new ProductPack(50, new Cost(1000));
        UnitSale sale = new UnitSale(productPack, new SellingPrice(300));

        assertEquals(280, sale.profit(), .002);
    }


    @Test
    public void test_selling_many_products_which_belong_to_a_pack_has_a_profit_equal_to_selling_price_minus_accumulated_cost() {
        ProductPack productPack = new ProductPack(50, new Cost(1000));
        MultiProductSale multiSale = new MultiProductSale(5, productPack, new SellingPrice(300));

        assertEquals(200, multiSale.profit(), .002);
    }
}
