const n: null = null;

interface User {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "Vasya",
    } as User;
  }
}

const user = getUser();
if (user) {
  const n55 = user.name;
}

// null - явно заданный неопределенный объект
// undefined - его мы не задали
