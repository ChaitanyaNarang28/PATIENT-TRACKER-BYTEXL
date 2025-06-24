
const prescriptions = [
  { id: 1, medicine: 'abc', date: '2025-06-23' },
  { id: 2, medicine: 'Adef', date: '2025-06-23' }
];

function PrescriptionViewer() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Prescriptions</h2>
      <ul>
        {prescriptions.map((p) => (
          <li key={p.id}>{p.medicine} - {p.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionViewer;