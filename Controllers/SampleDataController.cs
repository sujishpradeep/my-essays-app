using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace my_essays_app.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        //Static Class for temperory storing EssayDetail model data.
        public static class EssayDetailStore
        {
            public static string Title { get; set; }
            public static int WordCount { get; set; }
        }

        //EssayDetail Model 
        public class EssayDetail
        {
            public string Title { get; set; }
            public int WordCount { get; set; }
        }

        //Static Class for temperory storing UserDetail model data.
        public static class UserDetailStore
        {
            public static string UserName { get; set; }
            public static string Password { get; set; }

            public static string Jwt { get; set; }
        }

        //UserDetail Model 
        public class UserDetail
        {
            public string UserName { get; set; }
            public string Password { get; set; }

            public string Jwt { get; set; }
        }

        [HttpGet("[action]")]
        public EssayDetail EssayDetails()
        {

            EssayDetail essayDetail = new EssayDetail();

            //Fetch the static EssayDetailStore
            essayDetail.Title = EssayDetailStore.Title;
            essayDetail.WordCount = EssayDetailStore.WordCount;

            return essayDetail;
        }

        [HttpPut("[action]")]
        public EssayDetail EssayDetails([FromBody] EssayDetail essayDetail)
        {
            //Store the input in static EssayDetailStore
            EssayDetailStore.Title = essayDetail.Title;
            EssayDetailStore.WordCount = essayDetail.WordCount;

            //Return the input(temperory)
            return essayDetail;
        }

        [HttpGet("[action]")]
        public UserDetail Auth()
        {

            UserDetail userDetail = new UserDetail();

            //Fetch the static UserDetailStore
            userDetail.UserName = UserDetailStore.UserName;
            userDetail.Password = UserDetailStore.Password;
            userDetail.Jwt = UserDetailStore.Jwt;

            return userDetail;
        }

        [HttpPut("[action]")]
        public UserDetail Auth([FromBody] UserDetail userDetail)
        {

            //Store the input in static UserDetailStore
            UserDetailStore.UserName = userDetail.UserName;
            UserDetailStore.Password = userDetail.Password;

            if (userDetail.UserName.Equals("user") && userDetail.Password.Equals("pwd"))
            {
                UserDetailStore.Jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gU21pdGgiLCJ1c2VybmFtZSI6InVzZXIiLCJwYXNzd29yZCI6InB3ZCIsImlhdCI6MTUxNjIzOTAyMn0.MMDYglaGgX06z1lqFZJK2ugna88RF59zuCF2FbQQvXM";
                userDetail.Jwt = UserDetailStore.Jwt;
            }
            else
            {
                userDetail.Jwt = "";
            }

            Console.WriteLine("in Auth 2", userDetail);

            //Return the input(temperory)
            return userDetail;
        }
    }
}
