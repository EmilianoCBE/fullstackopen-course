export const StatisticLine = ({text, count}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{width: '55px'}}>{text}</td>
          <td>{count}</td>
        </tr>
      </tbody>
    </table>
  )
}
