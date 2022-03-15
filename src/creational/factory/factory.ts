interface Product {
  operation(): string;
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}

class ConcreteProduct1 implements Product {
  operation(): string {
    return 'ConcreteProduct1';
  }
}

class ConcreteProduct2 implements Product {
  operation(): string {
    return 'ConcreteProduct2';
  }
}

export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

export function clientCode(creator: Creator): string {
  return creator.someOperation();
}
