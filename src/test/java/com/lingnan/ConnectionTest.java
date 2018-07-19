package com.lingnan;

import org.junit.Test;

import java.sql.*;
import java.util.ResourceBundle;
import java.util.logging.Logger;

public class ConnectionTest {

    private Logger logger = Logger.getAnonymousLogger();
    @Test
    public void testH2Connection() throws SQLException, ClassNotFoundException {

        Class.forName("org.h2.Driver");
        Connection connection = DriverManager.getConnection("jdbc:h2:tcp://localhost/~/h2db", "sa", null);
        Statement statement = connection.createStatement();
        ResultSet rs = statement.executeQuery("SELECT * FROM TEST ;");
        while (rs.next()){

            this.logger.info(rs.getString("name"));
        }

    }
}
