const chai = require("chai"),
	  chaiHttp = require("chai-http"),
	  expect   = chai.expect;
chai.use(chaiHttp);

describe("Testing my API", ()=>{
	it("Should return status 200 for Home", (done)=>{
		chai.request(`http://localhost:2000`)
		.get("/")
		.then((res)=>{
			expect(res).to.have.status(200)
			done();
		})
		.catch((err)=>{
			throw err;
		});
	});

	it("Should return status 200 for Restaurant Api", (done)=>{
		chai.request(`http://localhost:2000`)
		.get("/restaurant")
		.then((res)=>{
			expect(res).to.have.status(200)
			done();
		})
		.catch((err)=>{
			throw err;
		})
	});

	it("Should return status 200 for Melatype API", (done)=>{
		chai.request(`http://localhost:2000`)
		.get("/mealtype")
		.then((res)=>{
			expect(res).to.have.status(200)
			done();
		})
		.catch((err)=>{
			throw err;
		});
	});
});	