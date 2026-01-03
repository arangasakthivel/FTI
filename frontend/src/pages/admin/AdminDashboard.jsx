import { useEffect, useState } from "react";
import api from "../../api/axios";
import { motion } from "framer-motion";
import AdminTopBar from "../../components/AdminTopBar";

const statusColors = {
  PENDING: "bg-yellow-500/20 text-yellow-400",
  ASSIGNED: "bg-blue-500/20 text-blue-400",
  IN_PROGRESS: "bg-indigo-500/20 text-indigo-400",
  RESOLVED: "bg-green-500/20 text-green-400",
};

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [assignData, setAssignData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const [complaintsRes, staffRes] = await Promise.all([
        api.get("/complaints"),
        api.get("/users/staff"),
      ]);
      setComplaints(complaintsRes.data);
      setStaffList(staffRes.data);
    } catch (err) {
      console.error("Warden dashboard load failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAssign = async (complaintId) => {
    const payload = assignData[complaintId];
    if (!payload) return alert("Select staff");

    try {
      const res = await api.put(
        `/complaints/${complaintId}/assign`,
        payload
      );

      setComplaints((prev) =>
        prev.map((c) =>
          c._id === complaintId ? res.data.complaint : c
        )
      );
    } catch (err) {
      alert(err.response?.data?.message || "Assignment failed");
    }
  };

  const pending = complaints.filter((c) => c.status === "PENDING");
  const inProgress = complaints.filter(
    (c) => c.status === "ASSIGNED" || c.status === "IN_PROGRESS"
  );
  const resolved = complaints.filter((c) => c.status === "RESOLVED");

  // CATEGORY AGGREGATION
  const categoryCounts = complaints.reduce((acc, c) => {
    acc[c.category] = (acc[c.category] || 0) + 1;
    return acc;
  }, {});
  const maxCategoryCount = Math.max(...Object.values(categoryCounts), 1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading Warden Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white px-10 pt-24 pb-16">
      <AdminTopBar />

      <h1 className="text-3xl font-bold mb-10">Warden Dashboard</h1>

      {/* ================= PENDING ================= */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6 text-yellow-400">
          Pending Complaints
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pending.map((c) => (
            <motion.div
              key={c._id}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 border border-white/10"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{c.category}</h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${statusColors[c.status]}`}
                >
                  {c.status}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-1">
                Block {c.block}, Room {c.room}
              </p>

              <p className="text-sm text-gray-300 mb-3">
                {c.description}
              </p>

              <p className="text-xs text-gray-500 mb-4">
                Raised by: {c.createdBy?.name}
              </p>

              <select
                className="auth-input"
                onChange={(e) =>
                  setAssignData((prev) => ({
                    ...prev,
                    [c._id]: { staffId: e.target.value },
                  }))
                }
              >
                <option value="">Select Staff</option>
                {staffList.map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => handleAssign(c._id)}
                className="w-full py-2 mt-3 rounded-full font-semibold
                           bg-gradient-to-r from-violet-500 to-indigo-500"
              >
                Assign Complaint
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ASSIGNED / IN PROGRESS ================= */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6 text-indigo-400">
          Assigned / In Progress
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {inProgress.map((c) => (
            <motion.div
              key={c._id}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 border border-white/10"
            >
              <h3 className="font-semibold mb-1">{c.category}</h3>
              <p className="text-sm text-gray-400 mb-2">
                Block {c.block}, Room {c.room}
              </p>
              <p className="text-sm text-gray-300 mb-3">
                {c.description}
              </p>
              <p className="text-xs text-gray-500">
                Assigned to: {c.assignedTo?.name || "—"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= RESOLVED ================= */}
      <section className="mb-24">
        <h2 className="text-xl font-semibold mb-6 text-green-400">
          Resolved Complaints
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {resolved.map((c) => (
            <motion.div
              key={c._id}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 border border-white/10 opacity-90"
            >
              <h3 className="font-semibold mb-1">{c.category}</h3>
              <p className="text-sm text-gray-400 mb-2">
                Block {c.block}, Room {c.room}
              </p>
              <p className="text-sm text-gray-300 mb-3">
                {c.description}
              </p>
              <p className="text-xs text-gray-500">
                Resolved by: {c.assignedTo?.name || "—"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ANALYTICS (END) ================= */}
      <section>
        <h2 className="text-2xl font-bold mb-8">
          Complaints Analytics
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SUMMARY */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6">Summary</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-gray-400 text-sm">Total</p>
                <p className="text-3xl font-bold">{complaints.length}</p>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-xl">
                <p className="text-yellow-400 text-sm">Pending</p>
                <p className="text-3xl font-bold">{pending.length}</p>
              </div>
              <div className="p-4 bg-indigo-500/10 rounded-xl">
                <p className="text-indigo-400 text-sm">Assigned</p>
                <p className="text-3xl font-bold">{inProgress.length}</p>
              </div>
              <div className="p-4 bg-green-500/10 rounded-xl">
                <p className="text-green-400 text-sm">Resolved</p>
                <p className="text-3xl font-bold">{resolved.length}</p>
              </div>
            </div>
          </div>

          {/* CATEGORY DISTRIBUTION */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6">
              Complaints by Category
            </h3>

            {Object.entries(categoryCounts).map(([cat, count]) => (
              <div key={cat} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{cat}</span>
                  <span className="font-semibold">{count}</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(count / maxCategoryCount) * 100}%`,
                    }}
                    transition={{ duration: 0.6 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
