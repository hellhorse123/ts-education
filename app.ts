function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

const getFullNameArrow = (firstName: string, lastName: string): string => {
  // после скобочек - явно возвращаемый тип функции
  return `${firstName} ${lastName}`;
};

getFullName("true", "false");
