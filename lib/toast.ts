const toast = {
  success(message: string) {
    if (typeof window !== "undefined") {
      window.alert(message);
    }
  },
};

export { toast };
