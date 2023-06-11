import TeamChoice from "./TeamChoice"

export default function Row({ number, formData, setFormData }) {
  return (
    <div className="flex justify-center">
      <div className="table_cell font-semibold">{number}</div>
      <TeamChoice setFormData={setFormData} />
      <TeamChoice />
      <TeamChoice />
      <TeamChoice />
    </div>
  )
}
