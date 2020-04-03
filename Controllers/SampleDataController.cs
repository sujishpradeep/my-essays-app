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
    }
}
