package com.mercadolibre.dojos;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.equalTo;

import com.mercadolibre.dojos.harnesses.JSONMapper;
import com.mercadolibre.dojos.harnesses.ResourceLoader;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import java.io.IOException;
import java.util.Map;

/**
 * Tests for the dojo.
 */
public class DojoTest {
	
	@Before
	public void setup() {
	}
	
	@Test
	@Ignore
	public void test_user_buy_item_buy_equal_pay_and_pais_with_efecty_so_efecty_congrats_is_rendered() throws IOException {
	    Map efectyAndBuyEqualPay = JSONMapper.toObject(
            ResourceLoader.getFileAsString("./params/efectyBuyEqualPay.json"),
            Map.class
        );

	    assertEquals(efectyAndBuyEqualPay.get("id"), 1372165859 /* order id */);
		
		// ... 
        // Code here!
        // ... 
	    // {
        //     "status": "success",
        //     "substatus": null,
        //     "heading": "¡Apúrate a pagar!",
        //     "title": "Paga ${price} en ${paymentMethodName} para reservar tu compra",
        // }	
	}
	
	@Test
	@Ignore
	public void test_should_render_congrats_for_orders_paid_by_credit_cards_shipped_customly() throws IOException {
        Map creditCardBuyEqualPayWithCustomShipping = JSONMapper.toObject(
                ResourceLoader.getFileAsString("./params/creditCardBuyEqualPayWithCustomShipping.json"),
                Map.class
        );

        assertEquals(creditCardBuyEqualPayWithCustomShipping.get("id"), 1372551201 /* order id */);

        // ...
        // Code here!
        // ... 
		// {
        //     "status": "success",
        //     "substatus": null,
        //     "heading": "¡Tu pago está aprobado!",
        //     "title": "Coordina con el vendedor el envío",
        // }
	}
	
	@Test
	@Ignore
	public void test_should_render_congrats_for_orders_paid_by_credit_cards_shipped_by_me() throws IOException {
        Map creditCardByEqualPayShippedByME = JSONMapper.toObject(
                ResourceLoader.getFileAsString("src/test/resources/params/creditCardByEqualPayShippedByME.json"),
                Map.class
        );

        assertEquals(creditCardByEqualPayShippedByME.get("id"), 1372632473 /* order id */);

		// ... 
        // Code here!
        // ... 
		// {
        //     "status": "success",
        //     "substatus": null,
        //     "heading": "¡Excelente compra!",
        //     "title": "El jueves 2017-05-18T00:00:00.000-05:00. te llegará el producto",
        // }
	}
	
	
}
