const apiFetch = async (url) => {
  try {
    const response = await fetch(`${url}`);

    if (!response.ok) {
      throw new Error(
        "Something went wrong! We are unable to get your request",
      );
    } else {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export default apiFetch;
