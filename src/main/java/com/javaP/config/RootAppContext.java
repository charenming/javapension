package com.javaP.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

//프로젝트에 사용할 bean정의

@Configuration
@ComponentScan("com.javaP.model.qna")
@ComponentScan("com.javaP.model.reserve")
@ComponentScan("com.javaP.model.gallery")
public class RootAppContext {
	
	@Bean
	   public DataSource dataSource() {
	      HikariConfig hikariConfig = new HikariConfig();
	      hikariConfig.setDriverClassName("oracle.jdbc.driver.OracleDriver");
	      hikariConfig.setJdbcUrl("jdbc:oracle:thin:@localhost:1521:xe");
	      hikariConfig.setUsername("reserve_user");
	      hikariConfig.setPassword("user1234");
	      
	      // 세부설정
	      hikariConfig.setMaximumPoolSize(10);
	      hikariConfig.setConnectionTimeout(50000); // 30초
	      //hikariConfig.setLeakDetectionThreshold(300000);
	      
	      HikariDataSource dataSource = new HikariDataSource(hikariConfig);
	      return dataSource;
	   }
	   
	   @Bean
	   public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
	      SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
	      sqlSessionFactoryBean.setDataSource(dataSource);
	      PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
	      sqlSessionFactoryBean.setConfigLocation(resolver.getResource("classpath:com/javaP/mybatis/config.xml"));
	      sqlSessionFactoryBean.setMapperLocations(resolver.getResources("classpath:com/javaP/mappers/*Mapper.xml"));
	      //sqlSessionFactoryBean.setMapperLocations(resolver.getResource("classpath:com/javaP/mapper/ReserveMapper.xml"));
	      
	      return (SqlSessionFactory)sqlSessionFactoryBean.getObject();
	   }
}
