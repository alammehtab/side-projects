package com.alam.blogappbackend;

import com.alam.blogappbackend.repositories.UserRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BlogAppBackendApplicationTests {
	@Autowired
	private UserRepo userRepo;
	@Test
	void contextLoads() {
	}

}
