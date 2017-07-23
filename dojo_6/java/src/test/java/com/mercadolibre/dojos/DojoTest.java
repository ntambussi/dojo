package com.mercadolibre.dojos;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Tests for the dojo.
 */
public class DojoTest {
	
	@Before
	public void setup() {
	}

    @Test
    public void test_bartering_products() {
        SingleProduct p = new SingleProduct( new Cost(100.0));
        UnitSale sale = new UnitSale(p, new ButeringSellingPrice( new Cow() ));

        assertEquals( new Profit( new Cow() ), sale.profit());
    }

	@Test
	public void test_selling_a_product_has_a_profit_equal_to_selling_price_minus_cost_1() {
		SingleProduct p = new SingleProduct( new Cost(100.0));
		UnitSale sale = new UnitSale(p, new SingleSellingPrice(300.0));

		assertEquals( new Profit(200.0), sale.profit());
	}

    @Test
    public void test_selling_a_product_has_a_profit_equal_to_selling_price_minus_cost_2() {
        SingleProduct p = new SingleProduct( new Cost(50.0));
        UnitSale sale = new UnitSale(p, new SingleSellingPrice(300.0));

        assertEquals( new Profit(250.0), sale.profit());
    }

    @Test
    public void test_selling_many_products_has_a_profit_equal_to_selling_price_minus_accumulated_cost() {
        SingleProduct products[] = {
                new SingleProduct(new Cost(100)),
                new SingleProduct(new Cost(120))
        };
        MultiProductSale multiSale = new MultiProductSale(products, new SingleSellingPrice(300));

        assertEquals( new Profit(80.0), multiSale.profit());
    }

    @Test
    public void test_selling_single_product_bought_through_pack() {
        ProductPack productPack = new ProductPack(50, new Cost(1000));
        UnitSale sale = new UnitSale(productPack, new SingleSellingPrice(300));

        assertEquals( new Profit(280.0), sale.profit());
    }


    @Test
    public void test_selling_many_products_which_belong_to_a_pack_has_a_profit_equal_to_selling_price_minus_accumulated_cost() {
        ProductPack productPack = new ProductPack(50, new Cost(1000));
        MultiProductSale multiSale = new MultiProductSale(5, productPack, new SingleSellingPrice(300));

        assertEquals(new Profit(200.0), multiSale.profit());
    }
}
