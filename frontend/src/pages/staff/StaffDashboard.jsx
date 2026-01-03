import { useEffect, useState } from "react";
import api from "../../api/axios";
import { motion } from "framer-motion";
import StaffTopBar from "../../components/StaffTopBar";

const statusColors = {
  ASSIGNED: "bg-blue-500/20 text-blue-400",
  IN_PROGRESS: "bg-indigo-500/20 text-indigo-400",
  RESOLVED: "bg-green-500/20 text-green-400",
};

const StaffDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssignedComplaints();
  }, []);

  const fetchAssignedComplaints = async () => {
    try {
      const res = await api.get("/api/complaints/assigned");
      setComplaints(res.data);
    } catch (err) {
      console.error("Failed to fetch assigned complaints", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await api.put(`/api/complaints/${id}/status`, { status });

      setComplaints((prev) =>
        prev.map((c) =>
          c._id === id ? res.data.complaint : c
        )
      );
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update status");
    }
  };

  // 🔹 Separate complaints
  const activeComplaints = complaints.filter(
    (c) => c.status === "ASSIGNED" || c.status === "IN_PROGRESS"
  );

  const resolvedComplaints = complaints.filter(
    (c) => c.status === "RESOLVED"
  );

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white px-10 pt-24 pb-10">
      <StaffTopBar />

      {/* ACTIVE COMPLAINTS */}
      <h1 className="text-3xl font-bold mb-2">
        Active Complaints
      </h1>
      <p className="text-gray-400 mb-8">
        Complaints currently assigned to you
      </p>

      {loading && <p className="text-gray-400">Loading complaints...</p>}

      {!loading && activeComplaints.length === 0 && (
        <p className="text-gray-400 mb-16">
          No active complaints
        </p>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
        {activeComplaints.map((c) => (
          <motion.div
            key={c._id}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl p-6 border border-white/10"
          >
            {/* HEADER */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg">
                  {c.category}
                </h3>
                <p className="text-sm text-gray-400">
                  Block {c.block}, Room {c.room}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full ${statusColors[c.status]}`}
              >
                {c.status}
              </span>
            </div>

            {/* BODY */}
            <p className="text-gray-300 text-sm mb-4">
              {c.description}
            </p>

            <p className="text-xs text-gray-500 mb-4">
              Raised by: {c.createdBy?.name || "Student"}
            </p>

            {/* ACTIONS */}
            {c.status === "ASSIGNED" && (
              <button
                onClick={() =>
                  updateStatus(c._id, "IN_PROGRESS")
                }
                className="
                  w-full py-2 rounded-full text-sm font-semibold
                  bg-indigo-500/80 hover:bg-indigo-500
                "
              >
                Start Work
              </button>
            )}

            {c.status === "IN_PROGRESS" && (
              <button
                onClick={() =>
                  updateStatus(c._id, "RESOLVED")
                }
                className="
                  w-full py-2 rounded-full text-sm font-semibold
                  bg-green-500/80 hover:bg-green-500
                "
              >
                Mark Resolved
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* RESOLVED COMPLAINTS */}
      <h2 className="text-2xl font-bold mb-2">
        Resolved Complaints
      </h2>
      <p className="text-gray-400 mb-8">
        Complaints you have successfully resolved
      </p>

      {resolvedComplaints.length === 0 && (
        <p className="text-gray-400">
          No resolved complaints yet
        </p>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {resolvedComplaints.map((c) => (
          <motion.div
            key={c._id}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 border border-white/10 opacity-80"
          >
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">{c.category}</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                RESOLVED
              </span>
            </div>

            <p className="text-sm text-gray-300 mb-2">
              Block {c.block}, Room {c.room}
            </p>

            <p className="text-xs text-gray-500">
              Resolved on{" "}
              {c.resolvedAt
                ? new Date(c.resolvedAt).toLocaleDateString()
                : "—"}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StaffDashboard;
