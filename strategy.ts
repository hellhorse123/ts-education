class StrategyUser {
  githubToken!: string;
  jwtToken!: string;
}

interface IAuthStrategy {
  auth(user: StrategyUser): boolean;
}

class Auth {
  constructor(private strategy: IAuthStrategy) {}

  setStrategy(strategy: IAuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: StrategyUser): boolean {
    return this.strategy.auth(user);
  }
}

class JWTStrategy implements IAuthStrategy {
  auth(user: StrategyUser): boolean {
    if (user.jwtToken) return true;
    return false;
  }
}

class GithubStrategy implements IAuthStrategy {
  auth(user: StrategyUser): boolean {
    if (user.githubToken) return true;
    return false;
  }
}

const user = new StrategyUser();
user.jwtToken = "token";
const authStrategy = new Auth(new JWTStrategy());
console.log(authStrategy.authUser(user));
authStrategy.setStrategy(new GithubStrategy());

console.log(authStrategy.authUser(user));
