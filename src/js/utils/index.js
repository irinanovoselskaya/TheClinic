export const getRoomTitleById = (rooms, id) => rooms.map(room => room.id == id ? room.title : null);
