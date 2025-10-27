import React, { useState } from "react";

const Profile = () => {
  // Sample data (replace with API data)
  const [profile, setProfile] = useState({
    name: "Ananya Sharma",
    email: "ananya@example.com",
    phone: "9876543210",
    dob: "2001-05-12",
    gender: "Female",
    studentId: "ENG2023001",
    department: "Engineering",
    semester: "5",
    enrollmentYear: "2023",
    address: "123, MG Road, Bangalore",
    emergencyContact: "9876543211",
  });

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>

      {/* Personal Info */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-medium">{profile.name}</p>
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">{profile.email}</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">{profile.phone}</p>
          </div>
          <div>
            <p className="text-gray-500">Date of Birth</p>
            <p className="font-medium">{profile.dob}</p>
          </div>
          <div>
            <p className="text-gray-500">Gender</p>
            <p className="font-medium">{profile.gender}</p>
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">Academic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">Student ID</p>
            <p className="font-medium">{profile.studentId}</p>
          </div>
          <div>
            <p className="text-gray-500">Department</p>
            <p className="font-medium">{profile.department}</p>
          </div>
          <div>
            <p className="text-gray-500">Semester</p>
            <p className="font-medium">{profile.semester}</p>
          </div>
          <div>
            <p className="text-gray-500">Enrollment Year</p>
            <p className="font-medium">{profile.enrollmentYear}</p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">Address</p>
            <p className="font-medium">{profile.address}</p>
          </div>
          <div>
            <p className="text-gray-500">Emergency Contact</p>
            <p className="font-medium">{profile.emergencyContact}</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h2 className="text-lg font-semibold">Account Settings</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Change Password
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Update Contact Info
        </button>
      </div>
    </div>
  );
};

export default Profile;
