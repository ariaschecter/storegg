// import cx from 'classnames';
import Image from 'next/image'
import React from 'react'

interface TableRowProps {
  image: string;
  title: string;
  categori: string;
  item: number;
  price: number;
  status: 'Pending' | 'Success' | 'Failed';
}

export default function TableRow(props: TableRowProps) {
  const { title, categori, item, price, status, image } = props;
  // const statusClass = cx({
  //   'float-start icon-status': true,
  //   pending: status === 'Pending',
  //   success: status === 'Success',
  //   failed: status === 'Failed',
  // })
  return (
    <tr className="align-middle">
      <th scope="row">
        <Image className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`}
          width={80} height={60} alt="Game Thumbnail" />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{categori}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${status.toLowerCase()}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  )
}
