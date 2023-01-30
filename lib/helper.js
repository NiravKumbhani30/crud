const BASE_URL = "http://localhost:3000";

export const getUsers = async () => {
  const responce = await fetch(`${BASE_URL}/api/users`);
  const json = await responce.json();

  return json;
};

export const getUser = async (userId) => {
  const responce = await fetch(`${BASE_URL}/api/users${userId}`);
  const json = await responce.json();

  if (json) return json;

  return {};
};

export const addUser = async (fromData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fromData),
    };

    const responce = await fetch(`${BASE_URL}/api/users`, Options);
    const json = await responce.json();
  } catch (error) {
    return error;
  }
};

export const updateUser = async (userId, fromData) => {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fromData),
  };

  const responce = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await responce.json();
  return json;
};



export const deleteUser = async (userId) => {
  const Options = {
    method: "DELETE",
  };

  const responce = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await responce.json();
  return json;
};
