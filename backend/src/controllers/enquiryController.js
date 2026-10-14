import pool from "../config/db.js";

export const getAllEnquiries = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM enquiries ORDER BY created_at DESC",
    );

    return res.status(200).json({
      success: true,
      message: "Enquiries fetched successfully",
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const getEnquiryById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute("SELECT * FROM enquiries WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry fetched successfully",
      data: rows[0],
    });
  } catch (error) {
    console.error("Error fetching enquiry:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const [result] = await pool.execute(
      "INSERT INTO enquiries (name, email, phone, message) VALUES (?, ?, ?, ?)",
      [name, email, phone, message],
    );

    const [newRecord] = await pool.execute(
      "SELECT * FROM enquiries WHERE id = ?",
      [result.insertId],
    );

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: newRecord[0],
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, message } = req.body;

    const [existing] = await pool.execute(
      "SELECT id FROM enquiries WHERE id = ?",
      [id],
    );
    if (existing.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }

    await pool.execute(
      "UPDATE enquiries SET name = ?, email = ?, phone = ?, message = ? WHERE id = ?",
      [name, email, phone, message, id],
    );

    const [updatedRecord] = await pool.execute(
      "SELECT * FROM enquiries WHERE id = ?",
      [id],
    );

    return res.status(200).json({
      success: true,
      message: "Enquiry updated successfully",
      data: updatedRecord[0],
    });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.execute("DELETE FROM enquiries WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Enquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
