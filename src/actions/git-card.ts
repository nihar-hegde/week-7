"use server";

export const getProfileInfo = async () => {
  try {
    const response = await fetch("https://api.github.com/users/nihar-hegde");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
