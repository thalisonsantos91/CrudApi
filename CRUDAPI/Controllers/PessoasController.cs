
using System.Collections.Generic;
using System.Threading.Tasks;
using CRUDAPI.Data;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class PessoasController : ControllerBase {
        private readonly DataContext _DataContext;

        public PessoasController (DataContext DataContext) {
            _DataContext = DataContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> PegarTodosAsync () {
            return await _DataContext.Pessoa.ToListAsync ();
        }

        [HttpGet ("{Id}")]
        public async Task<ActionResult<Pessoa>> PegarPessoaPeloIdAsync (int Id) {
            Pessoa pessoa = await _DataContext.Pessoa.FindAsync (Id);

            if (pessoa == null)
                return NotFound ();

            return pessoa;
        }

        [HttpPost]
        public async Task<ActionResult<Pessoa>> SalvarPessoaAsync (Pessoa pessoa) {
            await _DataContext.Pessoa.AddAsync (pessoa);
            await _DataContext.SaveChangesAsync ();

            return Ok (true);
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarPessoaAsync (Pessoa pessoa) {
            _DataContext.Pessoa.Update (pessoa);
            await _DataContext.SaveChangesAsync ();

            return Ok ();
        }

        [HttpDelete ("{Id}")]
        public async Task<ActionResult> ExcluirPessoaAsync (int Id) {
            Pessoa pessoa = await _DataContext.Pessoa.FindAsync (Id);
            if (pessoa == null)
                return NotFound ();

            _DataContext.Remove (pessoa);
            await _DataContext.SaveChangesAsync ();
            return Ok ();
        }

    }
}