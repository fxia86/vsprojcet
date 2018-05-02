using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using MySql.Data.MySqlClient;

namespace Tuquan.Test
{
    class Program
    {
        static void Main(string[] args)
        {
            User user = new User()
            {
                ID = 1,
                Name = "xiafeng",
                Age = 32
            };

            IDbConnection connection = new MySqlConnection("Database=tuquan;Data Source=47.100.23.44;User Id=root;Password=xiafeng;CharSet=utf8;port=3306");
            var result = connection.Execute("insert into user values (@id, @name, @age)", user);
        }
    }

    public class User
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
    }
}
