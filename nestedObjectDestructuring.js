const formatUserInfo = (user) => {
    const {
      id,
      profile: {
        name = "Information not available",
        address: {
          city = "Information not available",
          zipcode = "Information not available",
        } = {}, 
      } = {}, 
    } = user;
  
    return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`;
  };
  
  
  const user1 = {
    id: 123,
    profile: {
      name: "John Doe",
      address: { city: "Los Angeles", zipcode: "90001" },
    },
  };
  console.log(formatUserInfo(user1));
  
  
  const user2 = { id: 123, profile: { name: "John Doe" } };
  console.log(formatUserInfo(user2));
  
  const user3 = { id: 123 };
  console.log(formatUserInfo(user3));
  