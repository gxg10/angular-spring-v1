package com.example.postgres;

import com.example.postgres.services.StorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.annotation.Resource;


@SpringBootApplication
@EnableJpaAuditing
public class PostgresApplication implements CommandLineRunner {

    @Resource
    StorageService storageService;

	public static void main(String[] args) {

	    SpringApplication.run(PostgresApplication.class, args);
	}

	@Override
    public void run(String... arg) throws Exception {
	    storageService.deleteAll();
	    storageService.init();
    }

}
