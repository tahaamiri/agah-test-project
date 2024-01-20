export function post(event: (data: any, status: number) => void, url: string, body: any) {
    let status: number;
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    }).then(function (response) {
        status = response.status;
        return response.json();
    }).then(function (data) {
        event(data, status);
    }).catch((err) => {
        event(err, status);
    });
}

export function responseValidator(status: number): boolean {
    if (!status) {
        return false;
    } else {
        return status >= 200 && status < 300
    }
}