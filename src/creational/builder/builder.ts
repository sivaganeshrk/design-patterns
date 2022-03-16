interface Builder {
  productPartA(): void;
  productPartB(): void;
  productPartC(): void;
}

class Product1 {
  public part: string[] = [];

  addPart(partName: string): void {
    this.part.push(partName);
  }

  public listParts(): string {
    return `Product parts: ${this.part.join(', ')}`;
  }
}

export class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public productPartA(): void {
    this.product.addPart('PartA1');
  }

  public productPartB(): void {
    this.product.addPart('PartB1');
  }

  public productPartC(): void {
    this.product.addPart('PartC1');
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

export class Director {
  private builder: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalValueProduct(): void {
    this.builder.productPartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.productPartA();
    this.builder.productPartB();
    this.builder.productPartC();
  }
}
