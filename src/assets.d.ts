// src/declarations.d.ts or src/images.d.ts
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// declarations.d.ts or css-modules.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
