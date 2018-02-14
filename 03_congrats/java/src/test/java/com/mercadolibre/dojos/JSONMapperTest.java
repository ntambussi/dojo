package com.mercadolibre.dojos;

import com.mercadolibre.dojos.harnesses.JSONMapper;
import com.mercadolibre.dojos.harnesses.ResourceLoader;
import org.junit.Test;

import java.io.IOException;
import java.util.Map;

import static org.junit.Assert.assertEquals;

public class JSONMapperTest {
    @Test
    public void test_load_json_from_resources() throws IOException {
        Map m = JSONMapper.toObject(
            ResourceLoader.getFileAsString("./params/efectyBuyEqualPay.json"),
            Map.class
        );

        assertEquals(m.get("id"),1372165859);

    }
}
