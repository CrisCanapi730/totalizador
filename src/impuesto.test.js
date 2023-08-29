import  {calcularImpuesto, totalConImpuesto } from "./impuesto";
describe("Impuesto", () => {
    it("deberia devolver el impuesto del total del estado CA", () => {
      expect(calcularImpuesto("CA",100)).toEqual(8.25);
    });
    it("deberia devolver el impuesto del total del estado TX", () => {
      expect(calcularImpuesto("TX",500)).toEqual(31.25);
    });
    it("deberia devolver el impuesto del total del estado AL", () => {
        expect(calcularImpuesto("AL",100)).toEqual(4);
    });
    it("deberia devolver el impuesto del total del estado NV", () => {
        expect(calcularImpuesto("NV",100)).toEqual(8);
    });

    it("deberia devolver el total con impuesto del estado TX", () => {
        expect(totalConImpuesto("TX",500)).toEqual(531.25);
      });
    it("deberia devolver el total con impuesto del estado AL", () => {
        expect(totalConImpuesto("AL",100)).toEqual(104);
    });
    it("deberia devolver el total con impuesto del estado CA", () => {
        expect(totalConImpuesto("CA",100)).toEqual(108.25);
    });
    it("deberia devolver el total con impuesto del estado CA", () => {
        expect(totalConImpuesto("NV",100)).toEqual(108);
    });
      
  });
  