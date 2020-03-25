using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContractBOX.Models;
using ContractBOX.Helpers;

namespace ContractBOX.Controllers
{

    public class TokenController : Controller
    {
        // POST: api/Token
        /// <summary>
        /// Create Token  
        /// </summary>
        /// <returns></returns>
        /// <remarks>
        /// ### REMARKS ###
        /// The following POST generates Token 
        /// - 201 - Token Created 
        /// </remarks>
        [HttpPost("[action]")]
        public async Task<IActionResult> Token([FromBody] LoginViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest("Token failed to generate");

            //var user = (model.Password == "password" && model.Username == "username");
            var user = (model.Password.ToUpper() == "ADMIN" && model.Username.ToUpper() == "ADMIN");

            if (!user) return Unauthorized();

            return Ok(new AuthorizationHelper().TokenGenerator());
        }
    }
}