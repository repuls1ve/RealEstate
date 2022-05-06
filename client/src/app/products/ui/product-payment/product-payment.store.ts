import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { TranslateService } from '@ngx-translate/core'
import { SingleSeries } from '@swimlane/ngx-charts'
import { tap } from 'rxjs'
import { MortgagePaymentParams, PaymentCalculator } from 'src/app/shared/helpers/payment-calculator/payment-calculator.helper'

export interface ProductPaymentParams extends MortgagePaymentParams {
  insurance: number
  tax: number
}

export interface ProductPaymentState {
  results: SingleSeries
}

@Injectable()
export class ProductPaymentStore extends ComponentStore<ProductPaymentState> {
  constructor(private readonly translate: TranslateService) {
    super({ results: [] })
  }

  public readonly setResults = this.updater((state, value: SingleSeries) => ({
    ...state,
    results: value
  }))

  public readonly vm$ = this.select(state => state)

  public readonly subscribeTo = this.effect<unknown>(origin$ => origin$)

  public readonly calculatePayment = this.effect<ProductPaymentParams>(params$ => params$.pipe(
    tap(params => this.setResults([
      {
        name: this.translate.instant('payment-calculator.chart.principal'),
        value: PaymentCalculator.calculateMortgage(params)
      },
      {
        name: this.translate.instant('payment-calculator.chart.insurance'),
        value: params.insurance
      },
      {
        name: this.translate.instant('payment-calculator.chart.tax'),
        value: params.tax
      }
    ]))
  ))
}