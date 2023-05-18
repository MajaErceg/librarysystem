package rs.ac.singidunum.librarysystem.config;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;

public class MongoDbConfig {
        @Bean
        public MongoClient mongo()
        {
            ConnectionString connectionString = new ConnectionString("mongodb://localhost:27017/local");
            MongoClientSettings mongoClientSettings = MongoClientSettings.builder()
                    .applyConnectionString(connectionString)
                    .build();

            return MongoClients.create(mongoClientSettings);
        }

        @Bean
        public MongoTemplate mongoTemplate() throws Exception
        {
            return new MongoTemplate(mongo(), "local");
        }
}
