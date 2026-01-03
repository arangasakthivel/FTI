import { useEffect, useState } from "react";
import api from "../../api/axios";
import { motion, AnimatePresence } from "framer-motion";
import StudentTopBar from "../../components/StudentTopBar";

const statusColors = {
  PENDING: "bg-yellow-500/20 text-yellow-400",
  ASSIGNED: "bg-blue-500/20 text-blue-400",
  IN_PROGRESS: "bg-indigo-500/20 text-indigo-400",
  RESOLVED: "bg-green-500/20 text-green-400",
};

const StudentDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    category: "",
    block: "",
    room: "",
    description: "",
  });

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await api.get("/complaints/my");
        setComplaints(res.data);
      } catch {
        console.error("Failed to fetch complaints");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const handleSubmit = async () => {
    if (!form.category || !form.block || !form.room || !form.description) {
      alert("Please fill all fields");
      return;
    }

    setSubmitting(true);
    try {
      const res = await api.post("/complaints", form);

      setComplaints((prev) => [
        res.data.complaint,
        ...prev,
      ]);

      setForm({
        category: "",
        block: "",
        room: "",
        description: "",
      });

      setShowModal(false);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create complaint");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ✅ TOP BAR */}
      <StudentTopBar />

      {/* MAIN CONTENT */}
      <div className="min-h-screen bg-[#0b0f1a] text-white px-10 py-8 relative">
        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Complaints</h1>
            <p className="text-gray-400">
              Track and manage all complaints you have raised
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="px-6 py-3 rounded-full font-cta
                       bg-gradient-to-r from-violet-500 to-indigo-500"
          >
            + Raise Complaint
          </motion.button>
        </div>

        {!loading && complaints.length === 0 && (
          <p className="text-gray-400 mt-20 text-center">
            No complaints raised yet
          </p>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {complaints.map((c) => (
            <motion.div
              key={c._id}
              whileHover={{ y: -6 }}
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

              <p className="text-sm text-gray-300 mb-2">
                Block {c.block}, Room {c.room}
              </p>

              <p className="text-sm text-gray-400">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/60
                         flex items-center justify-center"
            >
              <motion.div
                className="glass-card rounded-3xl p-8 w-full max-w-lg"
              >
                <h2
                  className="
                    text-3xl font-extrabold text-center mb-3
                    bg-gradient-to-r from-violet-400 to-indigo-400
                    bg-clip-text text-transparent
                  "
                >
                  Raise a New Complaint
                </h2>

                <p className="text-center text-sm text-indigo-300 mb-6">
                  Once a complaint is submitted, it cannot be edited or deleted.
                  Please verify all details before submitting.
                </p>

                <select
                  className="auth-input"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  <option value="">Select Category</option>
                  <option value="ELECTRICITY">Electricity</option>
                  <option value="WATER">Water</option>
                  <option value="CLEANLINESS">Cleanliness</option>
                  <option value="INTERNET">Internet</option>
                  <option value="MAINTENANCE">Maintenance</option>
                  <option value="OTHER">Other</option>
                </select>

                <input
                  className="auth-input"
                  placeholder="Hostel Block (e.g. A)"
                  value={form.block}
                  onChange={(e) =>
                    setForm({ ...form, block: e.target.value })
                  }
                />

                <input
                  className="auth-input"
                  placeholder="Room Number"
                  value={form.room}
                  onChange={(e) =>
                    setForm({ ...form, room: e.target.value })
                  }
                />

                <textarea
                  className="auth-input h-28 resize-none"
                  placeholder="Describe the issue"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />

                <div className="flex justify-end gap-4 mt-6">
                  <button onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="px-6 py-2 rounded-full
                               bg-gradient-to-r from-violet-500 to-indigo-500"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default StudentDashboard;
