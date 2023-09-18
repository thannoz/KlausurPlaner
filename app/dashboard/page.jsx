import React from 'react';

const Dashboard = () => {
  // Beispiel Klausurdaten
  const examData = [
    { id: 1, date: '2023-10-15', course: 'Mathematik', class: '12ita', teacher: 'Herr Müller', time: '11:30', room: 'A101' },
    { id: 2, date: '2023-09-18', course: 'Deutsch', class: '12ita', teacher: 'Herr Müller', time: '11:30', room: 'B202' },
    { id: 3, date: '2023-11-03', course: 'Lernfeld 10', class: '12ita', teacher: 'Herr Grüning', time: '08:00', room: 'B202' },
    { id: 4, date: '2023-07-14', course: 'Lernfeld 12', class: '12ita', teacher: 'Herr Grüning', time: '09:00', room: 'B202' },
    { id: 9, date: '', course: '', class: '', teacher: '', time: '', room: '' },
    { id: 9, date: '', course: '', class: '', teacher: '', time: '', room: '' },
    { id: 9, date: '', course: '', class: '', teacher: '', time: '', room: '' },
    { id: 9, date: '', course: '', class: '', teacher: '', time: '', room: '' },
    { id: 9, date: '', course: '', class: '', teacher: '', time: '', room: '' },

  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className='text-4xl font-bold mb-5'>Dashboard</h1>
      <p className='mb-5'>&nbsp;</p> {}
      <h2 className='text-2xl font-bold mb-3'>Ihre Klausurtermine:</h2>
      <table className='rounded-lg overflow-hidden shadow-lg'>
        <thead>
          <tr>
            <th className='bg-gray-200 px-4 py-2'>Datum</th>
            <th className='bg-gray-200 px-4 py-2'>Fach</th>
            <th className='bg-gray-200 px-4 py-2'>Kurs</th>
            <th className='bg-gray-200 px-4 py-2'>Lehrer</th>
            <th className='bg-gray-200 px-4 py-2'>Zeit</th>
            <th className='bg-gray-200 px-4 py-2'>Raum</th>
          </tr>
        </thead>
        <tbody>
          {examData.map((exam) => (
            <tr key={exam.id}>
              <td className='px-4 py-2'>{exam.date}</td>
              <td className='px-4 py-2'>{exam.course}</td>
              <td className='px-4 py-2'>{exam.class}</td>
              <td className='px-4 py-2'>{exam.teacher}</td>
              <td className='px-4 py-2'>{exam.time}</td>
              <td className='px-4 py-2'>{exam.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
