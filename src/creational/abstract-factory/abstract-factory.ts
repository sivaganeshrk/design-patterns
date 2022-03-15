interface Droid {
  info(): string;
}

interface DroidProducerFactory {
  battleDroneFactory(): B1;
  pilotDroneFactory(): Rx24;
  getDrone(droneType: 'battle' | 'pilot'): B1 | Rx24;
}

class B1 implements Droid {
  info() {
    return 'B1, Battle Droid';
  }
}

class Rx24 implements Droid {
  info(): string {
    return 'Rx24, Pilot Droid';
  }
}

class DroidProducer implements DroidProducerFactory {
  battleDroneFactory(): B1 {
    return new B1();
  }

  pilotDroneFactory(): Rx24 {
    return new Rx24();
  }

  getDrone(droneType: 'battle' | 'pilot'): B1 | Rx24 {
    if (droneType === 'battle') return this.battleDroneFactory();
    return this.pilotDroneFactory();
  }
}

export default DroidProducer;
