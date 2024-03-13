export default function Manage() {
  return (
    <main className={'grid grid-cols-10 grid-rows-10'}>
      <div className={'col-start-1 col-end-11 row-start-1 row-end-3'}>Top</div>
      <div className={'col-start-1 col-end-3 row-start-3 row-end-11'}>Sidebar</div>
      <div className={'col-start-3 col-end-11 row-start-3 row-end-11'}>Content</div>
    </main>
  )
}
