import API from "./api";

const formData = new FormData();
formData.append("title", title);
formData.append("description", description);
formData.append("category", category);

files.forEach((file) => {
  formData.append("attachments", file);
});

export const createComplaint = async (formData) => {
  const token = localStorage.getItem("token");

  const response = await API.post("/complaints", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getMyComplaints = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/complaints/my-complaints", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getAssignedComplaints = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/complaints/assigned", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const addComment = async (id, text) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    `/complaints/${id}/comment`,
    { text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export const updateComplaintStatus = async (id, status) => {
  const token = localStorage.getItem("token");

  const response = await API.put(
    `/complaints/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
export const assignComplaint = async (id, assignedTo) => {
  const token = localStorage.getItem("token");

  const response = await API.put(
    `/complaints/${id}/assign`,
    { assignedTo },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
