import createApiClient from "./api.service";

class AttendanceService {
  constructor(baseUrl = "/api/attendance") {
    this.api = createApiClient(baseUrl);
  }
  async getAllEvents() {
    return await this.api.get("/events");
  }
  async getEventById(id) {
    return await this.api.get(`/events/by-id/${id}`);
  }
  async getAttendanceByEventId(id) {
    return await this.api.get(`/by-event/${id}`);
  }
}

export default new AttendanceService();
