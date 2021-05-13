import React from "react"
import MaterialTable from "material-table"
import { TablePagination } from "@material-ui/core"

function Presentation(props) {
  const { people, handleNextPage } = props
  const columns = [
    { field: "name", title: "Name" },
    { field: "height", title: "Height" },
    { field: "mass", title: "Weight" },
    { field: "hair_color", title: "Hair Color" },
    { field: "skin_color", title: "Skin Color" },
    { field: "eye_color", title: "Eye Color" },
    { field: "birth_year", title: "Birth Year" },
  ]

  return (
    <MaterialTable
      title=""
      columns={columns}
      data={people.data}
      isLoading={people.isLoading}
      options={{
        pageSize: 10,
        pageSizeOptions: [10],
        paginationPosition: "top",
        paginationType: "stepped",
      }}
      components={{
        Pagination: (props) => (
          <div>
            <TablePagination
              {...props}
              rowsPerPage={10}
              rowsPerPageOptions={[10]}
              onChangePage={(_, page) => handleNextPage(page)}
              count={people.count}
              page={people.page}
            />
          </div>
        ),
      }}
    />
  )
}

export default Presentation
