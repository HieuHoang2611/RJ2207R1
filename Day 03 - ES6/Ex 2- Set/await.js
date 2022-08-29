function wait(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }
  // hàm đợi trong js
  // muốn sử dụng thì phải là hàm async
  // async function ...